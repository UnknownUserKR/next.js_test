import Image from "next/image";
import Link from "next/link";
import hamster from "@/public/hamster_eating.jpg"
import hamster1 from "@/public/hamster1.jpg"
import sad_ham from "@/public/sad_hamster.jpg"

export function CategoriesSelection () {
    return(
        <div className="py-24 sm:py-32">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold tracking-tight">Shop by Category</h2>
                <Link className="text-sm font-semibold text-primary hover:text-primary/50" href="/products/all">Browse all Products &rarr;</Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
                    <Image src={hamster} alt="All Products Image" className="object-cover object-center" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex flex-col-reverse">
                        <Link href="/products/all">
                            <h3 className="text-white font-semibold">All Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image src={hamster1} alt="Products for men Image" className="object-center object-cover sm:absoulte sm:inset-0 sm:w-full sm:h-full" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
                    <div className="p-6 flex flex-col-reverse sm:absolute sm:inset-0">
                        <Link href="/products/men">
                            <h3 className="text-white font-semibold">Products for men</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image src={sad_ham} alt="Products for women Image" className="object-center object-cover sm:absoulte sm:inset-0 sm:w-full sm:h-full" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
                    <div className="p-6 flex flex-col-reverse sm:absolute sm:inset-0">
                        <Link href="/products/women">
                            <h3 className="text-white font-semibold">Products for women</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}