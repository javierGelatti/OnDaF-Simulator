# OnDaF Simulator

An application that helps students practice for the onDaF online test

## Getting Started

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://lolg.it/amber/amber#prerequisites).

## Use OndafSimulator as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
bower install OndafSimulator --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use OndafSimulator,
add `'amber-ondafsimulator/OndafSimulator'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
