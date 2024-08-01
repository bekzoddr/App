import React, { useState, useEffect } from "react";
import Form from "../../components/navbar/Create-Investor-Form";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Form isOpen={isOpen} closeModal={closeModal} />
      <div className="add">
        <h1>Home</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus recusandae nobis sint modi consectetur maiores veniam
          eligendi repellat possimus. Quis earum ipsam, rerum delectus cum,
          libero itaque eaque quisquam dignissimos magnam, accusamus ab quia!
          Rem at debitis, vel voluptates itaque tempora, assumenda similique
          optio culpa nam saepe cupiditate quasi repudiandae? Inventore repellat
          assumenda quibusdam! Enim recusandae modi quis sequi, totam, adipisci
          repudiandae, nisi reiciendis voluptatum numquam consequuntur atque!
          Ipsam illum eum accusamus libero magnam ut atque veniam,
          exercitationem sapiente beatae ratione iure quis odio deserunt itaque
          architecto corporis vitae consequuntur iusto aliquid nostrum. Repellat
          dolor molestias iure? Eius reiciendis illum odio, laborum repellendus
          modi saepe qui at? Nostrum, quam voluptatum. Dolorem, ducimus mollitia
          quia dolorum repellendus veritatis iusto, quo earum nostrum nobis
          illum? Omnis dolores a magnam, sapiente quaerat beatae quam accusamus
          fuga error quasi corporis harum laborum iusto odio? Veniam
          consequuntur excepturi at vitae nemo, dicta accusamus praesentium
          facilis eveniet odio minus? Iure aperiam, accusamus facere, provident
          eum illum distinctio voluptates praesentium repellendus quam placeat
          et laboriosam rem, sunt labore excepturi ut. Inventore eum ducimus
          eaque ullam quaerat veniam quae adipisci maxime nam ex voluptates nemo
          nobis, saepe explicabo asperiores, ut dolore non. Atque iste officiis,
          amet veniam nemo labore nihil vitae non aut eaque quasi consequatur
          tempore aperiam itaque, nobis fugit dolorem corrupti ullam neque iure
          quis! Ea optio possimus itaque, cupiditate eum libero tempore ab?
          Reprehenderit explicabo eveniet sequi at a, itaque tempore cumque.
          Recusandae, deleniti est, tempore dolorem ad cumque suscipit pariatur
          nobis, maiores amet expedita autem enim obcaecati! Maxime facere quo,
          inventore rerum sed quasi! Consequuntur eum numquam a accusamus, sunt
          non adipisci fugit culpa quisquam architecto molestias amet natus
          officia ducimus eveniet esse exercitationem ex. Aperiam nobis eius ab
          reprehenderit omnis quisquam impedit quam atque natus? Deserunt
          dignissimos ut et, sunt laboriosam asperiores a tempora, architecto
          aut odio ullam, excepturi vitae! Placeat aliquam illo, ducimus sunt id
          distinctio accusamus necessitatibus est numquam harum repellendus
          laborum sit cum consequuntur a! Quasi ut eius iste nihil dicta sint
          fugit facilis dolorem, veniam odio possimus dolores explicabo
          inventore expedita totam error non rem reprehenderit saepe quis
          adipisci similique aspernatur dolore! Repellat, eligendi iusto eius
          neque tenetur consequuntur nemo animi ad porro hic provident
          blanditiis natus temporibus consectetur doloribus laborum aut commodi
          perspiciatis dolor, dolore est sequi nisi saepe facilis. Provident
          natus nemo beatae iste quas laboriosam omnis mollitia harum, iusto,
          nesciunt deserunt, exercitationem atque magni sed pariatur corporis
          repudiandae totam in. Enim eligendi aut consequatur inventore nihil
          obcaecati explicabo ipsam officiis natus saepe suscipit fugiat, harum,
          itaque sint. Laudantium distinctio consectetur incidunt nihil nobis
          earum possimus. Repudiandae, nesciunt consectetur? Reiciendis, natus
          veritatis veniam dignissimos accusantium dolore minima odit
          consequatur obcaecati asperiores quibusdam facere praesentium facilis.
          Quis aspernatur facere beatae! Vitae, debitis? Molestiae laborum ab
          debitis cumque ratione, cupiditate nesciunt asperiores maxime, eos,
          cum fugit nemo sequi similique labore aliquid vel distinctio
          aspernatur non libero minima omnis ducimus mollitia accusantium.
          Molestiae consectetur minus aliquid autem? Assumenda unde eaque
          eligendi et deserunt mollitia sunt laudantium laboriosam ullam
          architecto, illum, impedit labore sapiente, quos amet doloremque esse
          laborum magnam. Eaque laboriosam maxime corporis repellendus optio
          autem exercitationem, excepturi quo repudiandae veritatis fugit
          assumenda doloremque voluptatem iusto hic aliquid magni obcaecati
          commodi. Sint, ipsum ex aliquam quasi quam numquam dolores! Ipsam
          excepturi adipisci minima officiis corrupti quas ad qui eveniet minus
          aut. Quis fugit rerum quidem blanditiis ad libero repellat neque,
          ipsum alias placeat recusandae, doloribus eaque magnam veniam atque,
          odio dignissimos! Labore, nobis? Harum voluptate at, aliquid, quaerat
          nesciunt necessitatibus sed obcaecati enim iure suscipit, provident
          voluptatibus sunt animi tempore in dolores aspernatur sequi velit
          exercitationem placeat atque maxime ex earum assumenda? Quasi
          aspernatur, ducimus ex at asperiores vero amet aut iste reiciendis!
          Alias quis minus, est non consequuntur totam officiis nulla quasi iure
          quibusdam iusto tempore labore debitis voluptas autem sed! Quasi
          ratione laboriosam, architecto, repellendus corrupti sapiente
          voluptate tempora nobis veniam, cupiditate dolores? Adipisci culpa
          dignissimos sed autem ullam unde dolores repellendus sequi nisi iure
          nihil laudantium, incidunt accusamus deleniti iusto ab et atque neque
          saepe? Quas recusandae id inventore, obcaecati dolorum iste error
          impedit fugiat laborum veniam unde modi reprehenderit non earum. In
          quia, similique iusto porro vero itaque cum nostrum quas vel
          voluptatem culpa eaque ut dolore ab et asperiores unde molestiae
          suscipit architecto repellendus aperiam numquam consectetur earum.
          Quae, alias. Architecto, optio reiciendis. Deserunt eius repellendus
          nemo enim veritatis molestias eum adipisci ipsum harum unde illo
          veniam vel ullam odit nesciunt a voluptates, cupiditate aperiam
          deleniti nisi possimus! Nemo ex ea enim harum, ratione tempore eaque
          quasi voluptas architecto officiis velit aspernatur doloribus eum,
          illo in molestias adipisci. Quas excepturi nisi, nesciunt voluptatem
          vero asperiores. Neque architecto maiores aperiam doloremque maxime
          eveniet eius itaque error placeat? Saepe temporibus mollitia
          consequuntur, deserunt sit minima tenetur hic quae quidem dolorum ea,
          asperiores aspernatur facilis vel, obcaecati quo animi dolor quaerat?
          Repudiandae eius perferendis cumque consectetur deleniti maiores
          sapiente modi expedita, debitis nemo, adipisci voluptatem commodi
          illo, tempore distinctio? Minima eaque nobis delectus atque.
          Necessitatibus, laborum impedit? Sed deserunt voluptas rem temporibus
          fugiat molestiae atque. Minima fugiat alias doloribus unde, ea aliquid
          quis iste rem, necessitatibus sit esse ipsa vero expedita perferendis
          aspernatur facilis voluptatibus? Nemo optio asperiores eveniet
          delectus doloremque, repudiandae modi autem esse quaerat. Et voluptate
          quasi doloribus ratione est, amet consectetur molestiae velit
          laboriosam, praesentium dolor quos beatae nesciunt qui! Sit ut
          molestiae, architecto quidem ipsam qui assumenda, officiis eius, omnis
          aperiam earum veritatis. Quibusdam, tempore, cum iusto placeat ipsum
          quae dicta nisi voluptates, accusantium sequi ut aliquam harum. Error
          in ducimus ab necessitatibus amet, explicabo aliquid earum odit minima
          molestias illo cupiditate dolorum provident impedit, laudantium nemo
          dolore vitae autem hic excepturi accusamus illum corporis ullam magni?
          Ullam tempora magnam quas harum, porro quae consectetur nobis, unde
          sit quo nam. Velit dolorem, labore, tempora molestias ea saepe vitae
          eius eveniet aspernatur earum nihil cumque reiciendis adipisci
          ratione, ipsam cum eos nostrum ut exercitationem eum iure modi! Alias
          exercitationem autem adipisci beatae quod facere iste sit reiciendis,
          eum incidunt sed hic rem quam earum!
        </div>
        <button
          className={`add-button ${showButton ? "visible" : "hidden"}`}
          onClick={openModal}
        >
          +
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
