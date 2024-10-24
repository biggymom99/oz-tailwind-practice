//import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

// section 태그 스타일 지정
function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-wrap justify-center gap-5 px-5 py-10">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;