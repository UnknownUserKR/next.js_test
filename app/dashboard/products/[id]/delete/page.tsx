import { deleteProduct } from "@/app/actions";
import { SubmitButton } from "@/app/component/dashboard/SubmitButton";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function DeleteRoute({params}: {params: {id: string}}) {
    return (
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle>Are you absoultely sure?</CardTitle>
                    <CardDescription>This action cannot be undone and permanently delete this product and remove all data.</CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary" asChild>
                        <Link href="/dashboard/products">Cancel</Link>
                    </Button>
                    <form action={deleteProduct}>
                        <Input type="hidden" name="productId" value={params.id} />
                        <SubmitButton variant="destructive" text="Delete Product" />
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}