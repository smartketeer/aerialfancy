import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { RotateCcw } from 'lucide-react';

export default function StackPhysics({ title, items = [] }) {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const itemsRef = useRef({});

  useEffect(() => {
    if (!containerRef.current) return;

    // Destructure Matter.js modules
    const { Engine, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Initialize Physics Engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Create boundaries (walls and ground)
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions);
    
    // Extend walls far upwards so items don't fall out sideways when spawned high up
    const wallHeight = height + 2000;
    const wallCenterY = height / 2 - 500;
    
    const leftWall = Bodies.rectangle(-50, wallCenterY, 100, wallHeight, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, wallCenterY, 100, wallHeight, wallOptions);
    // Add a high ceiling to prevent objects from flying too high out of bounds
    const ceiling = Bodies.rectangle(width / 2, -1200, width * 2, 100, wallOptions);

    World.add(world, [ground, leftWall, rightWall, ceiling]);

    const bodies = [];

    // Create physical bodies corresponding to our HTML items
    items.forEach((item, index) => {
      const el = itemsRef.current[item.id];
      if (!el) return;

      const rect = el.getBoundingClientRect();
      
      // Start them from the top, staggered
      const x = width / 2 + (Math.random() - 0.5) * (width * 0.5);
      const y = -100 - index * 40; // tighter spawn so they enter quicker

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.4, // Bounciness
        friction: 0.1,
        frictionAir: 0.01,
        chamfer: { radius: rect.height / 2 }, // Pill shape in physics engine
        label: item.id,
      });

      bodies.push(body);
    });

    World.add(world, bodies);

    // Mouse constraint for drag and drop interactions
    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(world, mouseConstraint);

    // Keep mouse in sync with container scroll (vital for HTML rendering)
    if (mouseConstraint.mouse.element) {
      mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
    }

    // Run the engine
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Sync DOM elements with physics bodies via requestAnimationFrame
    let animationFrameId;
    const updateLoop = () => {
      bodies.forEach((body) => {
        const el = itemsRef.current[body.label];
        if (el) {
          // Sync positions and rotation
          el.style.transform = `translate(${body.position.x - el.clientWidth / 2}px, ${
            body.position.y - el.clientHeight / 2
          }px) rotate(${body.angle}rad)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    updateLoop();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(world, false);
    };
  }, []);

  const handleReset = () => {
    if (!engineRef.current || !containerRef.current) return;
    const world = engineRef.current.world;
    const width = containerRef.current.clientWidth;

        world.bodies.forEach((body, index) => {
      if (!body.isStatic) {
        // Reset position and clear velocities
        Matter.Body.setPosition(body, {
          x: width / 2 + (Math.random() - 0.5) * (width * 0.5),
          y: -100 - index * 40,
        });
        Matter.Body.setVelocity(body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(body, 0);
      }
    });
  };

  return (
    <div className="w-full h-full flex flex-col font-sans relative group">
      <div
        ref={containerRef}
        className="relative w-full h-[320px] rounded-3xl overflow-hidden bg-white dark:bg-white/5 shadow-sm border border-primary/5 dark:border-white/5 group-hover:shadow-lg group-hover:border-primary/10 transition-all duration-300"
      >
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
          <h3 className="font-display font-bold text-xl text-primary dark:text-white">{title}</h3>
        </div>

        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-black/50 border border-primary/10 dark:border-white/10 rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary text-primary dark:text-white"
        title="Reset Stack"
      >
        <RotateCcw className="w-4 h-4" />
      </button>

      {items.map((item) => (
        <div
          key={item.id}
          ref={(el) => {
            itemsRef.current[item.id] = el;
          }}
          className="absolute top-0 left-0 px-3 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 select-none cursor-grab active:cursor-grabbing will-change-transform"
          style={{
            backgroundColor: item.color,
            color: item.text,
            touchAction: 'none',
            transform: 'translate(-9999px, -9999px)',
            boxShadow: '0 4px 6px -2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          }}
        >
          <div 
            className="w-4 h-4 rounded-full flex items-center justify-center font-bold text-[10px]"
            style={{ backgroundColor: item.text === 'white' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
          >
            {item.icon ? <item.icon size={10} /> : item.label[0]}
          </div>
          {item.label}
        </div>
      ))}
      </div>
    </div>
  );
}
