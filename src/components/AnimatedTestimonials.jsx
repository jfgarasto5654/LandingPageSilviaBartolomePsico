import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Conocí a Silvia cuando mi hija estaba cursando los primeros años de la escuela primaria. Recurrí a ella porque necesitaba apoyo escolar simplemente. Y desde el día uno que la conocimos supe que era la maestra indicada, ella no solo la ayudó para reforzar conocimientos propios de la edad sino que la tomo de la mano y la acompaño en todo su recorrido por dos años. Ahora mi niña tiene 14 años y lejos de olvidarse de aquella seño que la ayudó, siempre la recuerda con muchísimo afecto y cariño",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://eresmama.com/wp-content/uploads/2020/03/nino-escribiendo-carta-mano.jpg?auto=webp&quality=7500&width=640&crop=16:9,smart,safe&format=webp&optimize=medium&dpr=2&fit=cover&fm=webp&q=75&w=640&h=360",
    },
    {
      quote:
        "Silvia es la Psicopedagoga de mi hija Martina  hace más de 8 años. Desde que la conocimos creamos un gran vínculo. Es una excelente  profesional y tiene un trato muy amoroso con los pacientes. Siempre dispuesta y atenta a las necesidades de Martu.",
      name: "Mama de Martina",
      designation: "MM",
      src: "https://elroldanense.com/wp-content/uploads/2020/09/psicopedagogo-1.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://res.cloudinary.com/elvocerito/image/upload/v1624986014/beneficios_de_jugar_con_plastilina_1_9407dc93fd.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://blog.psiqueasy.com.br/wp-content/uploads/2023/08/provas-de-memorizacao.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://plastilina.top/wp-content/uploads/2019/03/beneficios-de-jugar-con-la-plastilina-1296785_w670-optimized.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
