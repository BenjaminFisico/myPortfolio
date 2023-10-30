import { proyect } from "../interfaces/proyectStructure";

export const PROYECTS: proyect[] = [
    {
        id: 5,
        name:"Frontend - Ecomerce libreria Angular",
        htmlContent: '\
        <h3>Proyecto de frontEnd para una página de venta de libros online</h3>\
        <img loading="lazy" class="imgclass border" src="https://images2.imgbox.com/33/bb/bg87ZxoD_o.png"> \
        <p>Este proyecto esta creado con el fin de practicar mis habilidades de frontend.</p> \
        <p>El mismo contiene un apartado que permite ver todos los libros subidos a la página, un carrito de compras y una página principal con novedades</p> \
        <p>Tambien resulto interesante desarrollar la logica de varios componentes de la misma, como un carousel infinito para ver los libros "nuevos" </p> \
        <p>Obviamente todos los datos que se muestran en la página no cargan desde una API, sino que fueron puestos como constantes en el proyecto porque esta vez quise enfocarme en practicar frontend</p> \
        <p>Link de demostracion: <strong><a href="https://ecomerce-libreria-angular.vercel.app/home" target="_blank">Ecomerce libreria Angular<a/></strong></p> \
        <p>Repositorio: <strong><a href="https://github.com/BenjaminFisico/EcomerceLibreriaAngular" target="_blank">Git hub - Ecomerce libreria<a/></strong></p> \
        '
    },
    {
        id: 1,
        name:"Mi portfolio",
        htmlContent: ' \
        <p>La página web en la que actualmente estas navegando es mi portfolio.</p> \
        <p>Es mi proyecto de programación mas reciente, pienso que es algo muy importante si somos programadores.</p> \
        <p>Crearlo fue un proceso creativo que considero bastante divertido, si te interesa inclui más detalles acerca de la implementación de ciertos  componentes en esta sección.</p> \
        <strong>Tecnologias usadas:</strong>\
        <ul> \
            <li>Angular Framework - ( v16.0.5 )</li> \
            <li>HTML 5</li> \
            <li>CSS 3</li> \
        </ul> \
        <p>¿ Sabías que en las carpetas de este proyecto no guarde ninguna imagen? ¿ cómo es posible? 🤔</p> \
        '
    },
    {
        id: 2,
        name:"Laravel Datatable Permissions",
        htmlContent: ' \
        <h3> Proyecto creado para que funcione como base para aplicaciones más grandes</h3> \
        <img loading="lazy" class="imgclass border" src="https://images2.imgbox.com/a7/e0/wbH4w4kQ_o.png"> \
        <p>En principio puede parecer que este proyecto está incompleto porque ni siquiera cree una vista de inicio y deje la que Laravel trae por defecto.</p> \
        <p>En realidad este proyecto lo desarrollé pensando en facilitar el trabajo de crear proyectos más grandes en los que se incluyan tablas con datos, diferentes tipos de usuarios, roles y permisos.</p> \
        <p> Es ideal para continuar con, por ejemplo, un sistema que una clientes y vendedores. 😀👍</p> \
        <strong>Tecnologias usadas: </strong> \
        <ul> \
        <li>Laravel php framework v.10.23.1</li> \
        <li>jetstream laravel</li> \
        <li>livewire 3</li> \
        <li>Laravel permissions - Spatie</li> \
        <li>Tailwind css</li> \
        </ul> \
        <p> Repositorio: <strong><a href="https://github.com/BenjaminFisico/Laravel-datatable-permission" target="_blank"> git hub - datatable permissions</a> </strong></p> \
        '
    },
    {
        id: 3,
        name:"Rat Lab - Open door Puzzle Game",
        htmlContent: '\
        <h3> Juego de puzzles simple pero con una gran profundidad </h3> \
        <img loading="lazy" class="imgclass border" src="https://images2.imgbox.com/a1/b2/RN7N1Gyz_o.png"> \
        <p> Es el primer y único videojuego que publique oficialmente. Está creado desde cero y totalmente por mi (salvo por la música ), es decir, que tanto los gráficos como la lógica del juego fueron el resultado de mi esfuerzo, sin embargo tengo que decir que sin dudas lo más complejo fue el diseño de niveles</p> \
        <p> Está pensado para ser jugado desde cualquier teléfono celular por eso decidí publicarlo en la Playstore de Google</p> \
        <strong>Tecnologias usadas: </strong> \
        <ul style="margin-left: 230px;"> \
        <li> Unity </li> \
        <li> C# </li> \
        </ul> \
        <p>Trailer: <strong><a href="https://www.youtube.com/shorts/lNeFkY-L7Hg" target="_blank">Youtube - Rat Lab - Trailer <a/></strong></p> \
        <p>Link a la playstore: <strong><a href="https://play.google.com/store/apps/details?id=com.BafGameStudio.PuzzleGame&pcampaignid=web_share" target="_blank">Rat Lab - Open door Puzzle Game<a/></strong></p> \
        '
    },
    {
        id: 4,
        name:"Ofensive twits qualification ",
        htmlContent: '\
        <h3> Inteligencia artificial que aprende a clasificar tweets como ofensivos </h3> \
        <p>Fue un proyecto escolar necesario para aprobar una materia en la carrera que realice</p> \
        <p> En verdad fue un reto porque tuvimos que desarrollar este tipo de tecnología desde cero y, al menos en mi caso antes de empezar con el mismo ni siquiera conocía la sintaxis de Python, el lenguaje que utilice para programarlo</p> \
        <p>Obviamente al final pude sobreponerme a esa dificultad para poder terminar el proyecto de forma bastante efectiva.</p> \
        <p>La gran deficiencia que tiene es que no es autosuficiente y necesitamos cargar los datasets de manera manual, porque google colab los elimina al terminar la session</p> \
        <p> Link: <strong><a href="https://colab.research.google.com/drive/16DCBl9ROof7wlmc5XkFEjlNchR7OXjHO?usp=sharing" target="_blank" >Offensive tweet qualifier</a> </strong> </p> \
        <p> Link a los datasets: <strong><a href="https://drive.google.com/drive/folders/1uO6_nlMj1NPqF2XGG6O6M55mueTu0FIZ?usp=sharing" target="_blank" >Tweets datasets</a></strong></p> \
        '
    }
];
