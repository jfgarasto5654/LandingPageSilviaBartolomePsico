import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://eresmama.com/wp-content/uploads/2020/03/nino-escribiendo-carta-mano.jpg?auto=webp&quality=7500&width=640&crop=16:9,smart,safe&format=webp&optimize=medium&dpr=2&fit=cover&fm=webp&q=75&w=640&h=360",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
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
