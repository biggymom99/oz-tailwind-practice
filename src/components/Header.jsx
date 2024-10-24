export default function Header() {
  return (
    <header className="flex justify-between items-center px-[20px] py-[10px] bg-black">
      {/* tailwindcss h2 태그 특정 태그(h2 등)에 대한 스타일을 직접 제공하지 않기 때문에 따로 지정 */}
      <h2 className="font-bold text-2xl">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5">
        <li className="list-none font-normal text-sm">로그인</li>
        <li className="list-none font-normal text-sm">회원가입</li>
        <li className="list-none font-normal text-sm">내클래스</li>
      </ul>
    </header>
  );
}