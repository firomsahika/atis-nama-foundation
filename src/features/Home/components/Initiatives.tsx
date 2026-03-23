import { InitiativeCard } from "@/components/InitiativeCard";

const INITIATIVES_DATA = [
  {
    title: "Clean Water for Elder Homes",
    description: "Ensuring sustainable and accessible clean water systems for community centers housing elderly citizens in Northern Ethiopia.",
    category: "Health",
    imageUrl: "/images/water-project.jpg",
    imageAlt: "Elderly people receiving clean water"
  },
  {
    title: "Youth Literacy Archive",
    description: "Building digital and physical libraries that preserve Ethiopian oral histories while teaching modern literacy skills to youth.",
    category: "Education",
    imageUrl: "/images/literacy-project.jpg",
    imageAlt: "Young students in a modern library"
  },
  {
    title: "Crafting Legacy Workshop",
    description: "A vocational program where master elder craftsmen mentor orphaned youth in traditional weaving and metalwork.",
    category: "Heritage",
    imageUrl: "/images/craft-project.jpg",
    imageAlt: "Elders teaching traditional weaving"
  }
];

export const Initiatives = () => {
  return (
    <section className="py-24 bg-background px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
              Active Missions
            </span>
            <h2 className="font-headline text-5xl font-black text-primary leading-tight">
              Empowering Communities through Targeted Initiatives
            </h2>
          </div>
          <a href="/projects" className="text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-2 hover:text-secondary hover:border-secondary transition-all">
            View all projects
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIATIVES_DATA.map((item, index) => (
            <InitiativeCard 
              key={index}
              {...item} 
              onButtonClick={() => console.log(`Clicked ${item.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};