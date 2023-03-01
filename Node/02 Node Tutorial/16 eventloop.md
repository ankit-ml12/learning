### event loop

> What is the Event Loop?

- The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

- Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

> event loop similar to js loop in node
> asynchrounous is greate because we are not blocking the event loop
