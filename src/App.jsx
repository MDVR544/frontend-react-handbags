import './App.css'
import Button from "./Components/Buttons/Buttons.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Product from "./Components/Product/Product.jsx";
import brand from "./assets/brand.png";
import designers from "./assets/our_story.png";
import Tile from "./Components/Tile/Tile.jsx";


function App() {

  return (
      <>

      <h1>Handbags & Purses</h1>
        <nav>
          <Button
              textInput = "to the collection"
              disabled = {false}
          />
          <Button
              textInput = "shop all bags"
              disabled = {false}
          />
          <Button
              textInput = "pre-orders"
              disabled = {true}
          />
        </nav>

        <main>
          <Product
          articleName="Best seller"
          articleImage={bag_1}
          articleImageAlt="Handy bag"
          articleDescription="The handy bag"
          articlePrice="€400,-"
          />
          <Product
              articleName="Best seller"
              articleImage={bag_2}
              articleImageAlt="Stylish bag"
              articleDescription="The stylish bag"
              articlePrice="€250,-"
          />
          <Product
              articleName="New collection"
              articleImage={bag_3}
              articleImageAlt="Simple bag"
              articleDescription="The Simple bag"
              articlePrice="€300,-"
          />
          <Product
              articleName="New collection"
              articleImage={bag_4}
              articleImageAlt="Trendy bag"
              articleDescription="The Trendy bag"
              articlePrice="€150,-"
          />
        </main>
        <footer>
          <Tile header="The brand">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate debitis doloribus dolorum
              excepturi, fuga hic id incidunt inventore ipsa necessitatibus odit, pariatur praesentium quo sed similique
              temporibus veniam veritatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate debitis doloribus dolorum
            excepturi, fuga hic id incidunt inventore ipsa necessitatibus odit, pariatur praesentium quo sed similique
            temporibus veniam veritatis!
          </p>
            </Tile>

          <Tile>
            <img src={brand} alt="Image of brand"/>
          </Tile>

          <Tile>
            <img src={designers} alt="Image of designers"/>
          </Tile>

          <Tile header="Our story">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda incidunt quibusdam quisquam quod sed.
              Aliquam aliquid aspernatur autem beatae consequatur dicta, distinctio earum eius fugiat fugit, illum incidunt
              ipsum molestiae natus, necessitatibus obcaecati officiis possimus praesentium quo sit temporibus veritatis.
            </p>
          </Tile>
        </footer>
      </>
        )
}

export default App
