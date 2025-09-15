import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Conocí a Silvia cuando mi hija estaba cursando los primeros años de la escuela primaria. Recurrí a ella porque necesitaba apoyo escolar simplemente. Y desde el día uno que la conocimos supe que era la maestra indicada, ella no solo la ayudó para reforzar conocimientos propios de la edad sino que la tomo de la mano y la acompaño en todo su recorrido por dos años. Ahora mi niña tiene 14 años y lejos de olvidarse de aquella seño que la ayudó, siempre la recuerda con muchísimo afecto y cariño",
      name: "MJ",
      designation: "Mama Julieta",
      src: "https://eresmama.com/wp-content/uploads/2020/03/nino-escribiendo-carta-mano.jpg?auto=webp&quality=7500&width=640&crop=16:9,smart,safe&format=webp&optimize=medium&dpr=2&fit=cover&fm=webp&q=75&w=640&h=360",
    },
    {
      quote:
        "Silvia es la Psicopedagoga de mi hija Martina  hace más de 8 años. Desde que la conocimos creamos un gran vínculo. Es una excelente  profesional y tiene un trato muy amoroso con los pacientes. Siempre dispuesta y atenta a las necesidades de Martu.",
      name: "MM",
      designation: "Mama Martina",
      src: "https://elroldanense.com/wp-content/uploads/2020/09/psicopedagogo-1.jpg",
    },
    {
      quote:
        "Llegamos a la consulta con muchas dudas y miedos sobre el aprendizaje de nuestro hijo. Desde el primer momento sentimos confianza y acompañamiento. Gracias al trabajo psicopedagógico, nuestro hijo no solo mejoró en la escuela, sino que también recuperó la seguridad en sí mismo. Como padres, nos sentimos escuchados y guiados en cada paso del proceso.",
      name: "PP",
      designation: "Papa Pedro",
      src: "https://res.cloudinary.com/elvocerito/image/upload/v1624986014/beneficios_de_jugar_con_plastilina_1_9407dc93fd.png",
    },
    {
      quote:
        "Ver los progresos de nuestra hija fue muy emocionante. Con la ayuda y la paciencia de la psicopedagoga, aprendió a disfrutar de los desafíos y nosotros, como familia, también aprendimos nuevas formas de acompañarla. Hoy la vemos más segura, motivada y feliz.",
      name: "PL",
      designation: "Padres de Lourdes",
      src: "https://blog.psiqueasy.com.br/wp-content/uploads/2023/08/provas-de-memorizacao.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
