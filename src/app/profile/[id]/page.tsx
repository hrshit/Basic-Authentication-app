export default function userProfile ({params} : any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
                 <h1 className="p-5text-center text-white text-2xl">Profile  Page
                 <span className="p-2 rounded bg-orange-400 text-black ml-2 text-4xl">{params.id}</span>
                 </h1>
        </div>
    )
}