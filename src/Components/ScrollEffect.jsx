import React from "react";
import { motion, useScroll } from "motion/react";

export default function ScrollEffect() {
  const scrollYProgress = useScroll().scrollYProgress;
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="bg-red-500 w-full origin-left h-3 fixed top-0 left-0"
      ></motion.div>
      <div className="p-20 text-center font-mono">
        <h1 className="text-4xl font-bold mb-8">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          quibusdam repellat minima vitae modi voluptas quidem, odio libero
          dolore aperiam quod nulla nobis dignissimos earum aut amet doloribus
          eos deleniti placeat, dolores neque numquam ratione voluptatum?
          Tenetur consequatur cumque unde nesciunt, veritatis fugiat ratione
          facere asperiores porro repellendus alias aut voluptas minus aperiam
          perspiciatis nam quam nemo soluta natus ab quia obcaecati rerum? Eaque
          molestias neque corporis veritatis beatae aliquam, iste, accusantium
          et fugiat eius autem vitae! Sit perspiciatis placeat consectetur nam
          possimus totam distinctio id laborum impedit exercitationem omnis
          doloribus in, voluptatibus adipisci tempore ea. Dignissimos in
          repudiandae ad. <br />
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
          expedita assumenda excepturi accusantium eos reprehenderit tempore
          molestiae. Neque asperiores qui quibusdam sed distinctio?Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Dolor impedit expedita
          possimus ut quam optio fuga, atque animi consectetur adipisci ex
          voluptas dolores dolore, nobis unde maiores molestias enim iusto modi
          fugit facere laudantium nihil! Minima laborum placeat nam ullam
          reiciendis. Facilis, accusamus.
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit hic
          debitis eos necessitatibus et tempora, quia repellendus doloribus quis
          quibusdam similique quos iure id aperiam, eligendi perspiciatis
          distinctio architecto vero. Eligendi blanditiis, eius tenetur ullam
          saepe temporibus voluptatibus vitae adipisci qui enim sit veniam,
          dignissimos autem omnis aperiam explicabo quibusdam ut? Commodi
          repudiandae iure, quae placeat nihil a. A dolore soluta dolor nemo
          amet reprehenderit ducimus recusandae, minima cupiditate et saepe ea
          similique molestias provident voluptatibus reiciendis hic vero
          sapiente alias. Dolorem molestiae, delectus quae animi adipisci ex et
          id recusandae? Ipsam, aliquam reprehenderit facere, odit consequatur
          molestias enim reiciendis ab dolorem assumenda alias omnis doloremque!
          Quam deleniti fugiat fugit aliquid dicta, vitae maxime minus accusamus
          minima quae nesciunt atque eius officia modi deserunt eligendi
          consectetur at veniam alias. Veniam illum quae doloremque aliquam
          itaque, hic est modi distinctio cumque quos accusantium delectus unde
          voluptatibus quo, ipsa, esse harum tempora deserunt corporis eos
          architecto autem libero iusto earum! Assumenda aliquid ullam,
          laboriosam, totam quidem soluta excepturi quasi quam possimus ex odit
          a eaque qui magnam minus accusantium tempore cupiditate eos. Pariatur
          tempore voluptates maiores eos. Mollitia aut, veritatis ab harum alias
          animi? Rerum error veritatis fugiat quasi ipsum unde odit optio autem,
          consequuntur enim nesciunt, tempore modi quibusdam quisquam
          consequatur amet, in ipsa velit tempora excepturi voluptatum rem? Cum
          nesciunt, doloremque quis, earum labore assumenda ut, perferendis
          ducimus soluta quas qui.br
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          obcaecati cumque aspernatur atque suscipit ducimus harum laborum iure
          nisi quam animi nulla expedita, explicabo mollitia dolore molestias
          minus consequuntur sunt officiis! Nisi rem quaerat, quasi incidunt
          libero porro debitis ducimus consectetur culpa cumque quibusdam,
          possimus maxime dolorem. Fugiat, eligendi corporis consequuntur
          accusantium ducimus error eos nulla consectetur, quod est assumenda
          hic necessitatibus odit voluptatem corrupti id pariatur at, tempora
          mollitia sint! Tempore, ipsum qui, commodi enim necessitatibus odit
          consequuntur sit corporis et quidem minima dolores blanditiis quisquam
          fuga quibusdam consectetur nihil molestias alias. Perspiciatis a sequi
          fuga. Fuga soluta molestias consequuntur maxime, explicabo blanditiis
          voluptatibus eligendi provident veniam, voluptatem sunt ratione. In
          fugiat facilis, minima inventore consectetur dolor dolore saepe
          pariatur mollitia quaerat, veniam eligendi dolorem odit nihil officia
          eos possimus sed explicabo non ipsum tenetur ullam repudiandae
          impedit. Voluptatem voluptates vero provident recusandae dolor magnam
          quae aperiam perspiciatis cumque neque, beatae ullam quo voluptate!
          Tempora, delectus fuga voluptate perspiciatis dolor nemo, vero quam
          aliquid laboriosam eveniet culpa totam impedit maiores laudantium
          asperiores? Architecto cumque officia recusandae laudantium,
          repudiandae soluta, voluptatibus eum aliquid laboriosam veniam,
          aperiam nostrum aliquam sint incidunt! In sint fugit at id distinctio
          labore nostrum accusamus quidem.
        </p>
      </div>
    </>
  );
}
