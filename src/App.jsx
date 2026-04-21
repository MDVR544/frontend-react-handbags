import './App.css'
import Button from "./Components/Buttons/Buttons.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";


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
          <article>
            <span>Best seller</span>
            <img src={bag_1} alt="Handy bag"/>
            <p>The handy bag</p>
            <h4>€400,-</h4>
          </article>

          <article>
            <span>Best seller</span>
            <img src={bag_2} alt="Stylish bag"/>
            <p>The stylish bag</p>
            <h4>€250,-</h4>
          </article>

          <article>
            <span>Best seller</span>
            <img src={bag_3} alt="Simple bag"/>
            <p>The simple bag</p>
            <h4>€300,-</h4>
          </article>

          <article>
            <span>Best seller</span>
            <img src={bag_4} alt="Trendy bag"/>
            <p>The trendy bag</p>
            <h4>€150,-</h4>
          </article>
        </main>
      </>
        )
}

export default App
