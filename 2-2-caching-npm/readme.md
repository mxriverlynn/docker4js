# Section 2.2: Caching npm Modules

Constantly re-installing npm modules will drain your desire to work
with Docker. After all, you never need to do this when you work from
your local machine. Why should you do it in Docker?

In this section, you'll learn a few techniques that can significantly
reduce the amount of time that Docker spends install npm modules.

# Run the Sample Code

0. Edit the dockerfile to cache the modules
0. Edit code and rebuild the container without re-installing modules
0. Re-use previously installed modules across containers
