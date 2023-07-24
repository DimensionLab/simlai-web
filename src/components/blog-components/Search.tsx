import { useEffect, useState } from "react";

interface SearchProps {
  categoryArr: string[] | undefined;
  setSelected: any;
}

const Search = ( { categoryArr, setSelected }: SearchProps ) => {
  const [buttonText, setButtonText] = useState("Submit");
  const [categoryOpened, setCategoryOpened] = useState(false);
  const [defaultCategoryText, setDefaultCategoryText] = useState("Categories");

  const handleSubmit = () => {
    setButtonText("Not yet");
    setTimeout(
      () => setButtonText("Submit"), 2000
    );
  }

  const handleCategoryOpened = () => {
    setCategoryOpened(!categoryOpened);
  }

  const handleClick = (category: string) => {
    console.log(`You've clicked on: ${category}`);
    setCategoryOpened(false);
    setDefaultCategoryText(category);
    setSelected(category);
  }

  return (
    <section className="w-full px-4 mb-8 xl:px-24 pt-12">
      <main className="w-full flex flex-col gap-y-4 xl:gap-y-8">
        <h1 className="font-bold text-[28px] xl:text-4xl">Blog</h1>
        <div className="flex flex-col gap-y-4 xl:flex-row max-w-3xl xl:gap-x-4">
          <div className="flex flex-col gap-y-2 xl:w-[40%]">
            <label className="text-[#7C7F8B] text-xs">SEARCH BY KEYWORD</label>
            <input type="text" placeholder="Input text" className="bg-[#373A45] py-4 px-4 rounded text-sm text-[#7C7F8B]" disabled/>
          </div>
          <div className="flex flex-col xl:w-[40%] gap-y-0">
            <label className="text-[#7C7F8B] text-xs pb-2">FILTER BY CATEGORY</label>
            <div className="bg-[#373A45] py-4 px-4 rounded-t text-sm text-white flex justify-between items-center">
              <span className={`text-[#7C7F8B]`}>{defaultCategoryText}</span>
              <img src="assets/simlai/dropdown-icon.svg" alt="dropdown icon" onClick={handleCategoryOpened}/>
            </div>
            {categoryArr?.map((category, index) => (
              <span key={index} className={`${categoryOpened ? `flex` : `hidden` } bg-[#373A45] py-4 px-4 rounded-b text-sm text-white flex justify-between items-center border-t-2 border-stone-900 hover:cursor-pointer hover:bg-[#2B2F36] duration-300`} onClick={() => handleClick(category)}>{category}</span>
            ))}
          </div>
          <button className={`w-full bg-[#61646F] py-3.5 px-4 rounded  xl:items-center xl:justify-center xl:w-24 ${categoryOpened ? `hidden` : `xl:flex xl:self-end`}`} onClick={handleSubmit}>{buttonText}</button>
        </div>
      </main>
    </section>
  );
}

export default Search;