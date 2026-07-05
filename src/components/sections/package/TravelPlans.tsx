import Image from "next/image";

const travelPlans = [
  {
    day: "DAY 01",
    description: "Lorem Ipsum is simply dummy text.",
  },
  {
    day: "DAY 02",
    description: "Lorem Ipsum is simply dummy text.",
    imageSrc: "/assets/imgs/banner/book3.png",
    extra: ["Lorem Ipsum is simply dummy text.", "Lorem Ipsum is simply dummy text."],
  },
  {
    day: "DAY 03",
    description: "Lorem Ipsum is simply dummy text.",
  },
  {
    day: "DAY 04",
    description: "Lorem Ipsum is simply dummy text.",
  },
  {
    day: "DAY 05",
    description: "Lorem Ipsum is simply dummy text.",
  },
];

export default function TravelPlans() {
  return (
    <section className="py-16 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-3xl font-semibold text-black mb-10">Travel Plans</h2>
      <div className="flex flex-col gap-6">
        {travelPlans.map((plan, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-2xl p-6 flex justify-between items-start"
          >
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold">{plan.day}</h3>
              <p className="mt-2 [font-family:'Montserrat',Helvetica] text-lg text-black">{plan.description}</p>
              {plan.extra?.map((line, j) => (
                <p key={j} className="mt-1 text-lg font-medium">
                  {line}
                </p>
              ))}
            </div>
            {plan.imageSrc && (
              <Image
                src={plan.imageSrc}
                alt={plan.day}
                width={250}
                height={160}
                className="rounded-xl object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
