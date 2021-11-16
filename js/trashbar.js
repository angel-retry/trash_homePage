const engine = Matter.Engine.create();

//Background設定
const render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options:{
        wireframes: false,
        background: "#F6F6F6",
        width:'414',
        high: '890'
    }
});

const trashbar = [
    ...[...document.querySelectorAll("div.trashbar > svg > path")].map(path => {
        const body = Matter.Bodies.fromVertices(
        200, 450, Matter.Svg.pathToVertices(path),{isStatic: true,render: {
            wireframes: true,
            fillStyle: '#037C70'
       }},true);
        Matter.Body.scale(body, 0.9, 0.9);
        return body;
    })
];

let trashbar_head = Matter.Bodies.rectangle(200,0,330,25,{render: {sprite: { texture: 'img/homePage_trashbarHead.png' }}});


let beg = Matter.Bodies.rectangle(150,100,50,55,{render: {sprite: { texture: 'img/homePage_beg.png' }}});
let cup = Matter.Bodies.rectangle(200,100,40,50,{render: {sprite: { texture: 'img/homePage_cup.png' }}});
let cho = Matter.Bodies.rectangle(200,100,50,55,{render: {sprite: { texture: 'img/homePage_cho.png' }}});
let straw = Matter.Bodies.rectangle(200,80,30,60,{render: {sprite: { texture: 'img/homePage_straw.png' }}});
let box = Matter.Bodies.rectangle(200,150,60,35,{render: {sprite: { texture: 'img/homePage_box.png' }}});
let tomato = Matter.Bodies.rectangle(180,120,30,50,{render: {sprite: { texture: 'img/homePage_tomato.png' }}});
let other = Matter.Bodies.circle(200,120,25,{render: {sprite: { texture: 'img/homePage_other.png' }}});
let plate = Matter.Bodies.rectangle(200,120,70,50,{render: {sprite: { texture: 'img/homePage_plate.png' }}});

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
render.mouse = mouse;

Matter.Composite.add(engine.world, [
    Matter.Bodies.rectangle(0, 600, 1000, 10, { isStatic: true ,render: { fillStyle: '#F6F6F6'}}),
    Matter.Bodies.rectangle(0, 100, 10, 6000, { isStatic: true ,render: { fillStyle: '#F6F6F6'}}),
    Matter.Bodies.rectangle(414, 100, 10, 6000, { isStatic: true ,render: { fillStyle: '#F6F6F6'}})
]);


console.log(trashbar);
Matter.World.add(engine.world, trashbar);
Matter.World.add(engine.world, trashbar_head);
Matter.World.add(engine.world, beg);
Matter.World.add(engine.world, cup);
Matter.World.add(engine.world, cho);
Matter.World.add(engine.world, straw);
Matter.World.add(engine.world, box);
Matter.World.add(engine.world, other);
Matter.World.add(engine.world, tomato);
Matter.World.add(engine.world, plate);


Matter.World.add(engine.world,mouseConstraint);
Matter.Runner.run(engine);
Matter.Render.run(render);