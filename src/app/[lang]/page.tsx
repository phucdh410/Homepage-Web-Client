import { getDictionary } from "@/dictionaries";
import { IPageProps } from "@/types/page";

interface IHomePageProps extends IPageProps{}

export default async function Home({params}:IHomePageProps) {

    const d = await getDictionary(params.lang)
    
    return <div>
        <button>{d.test}</button>
    </div>;
}
