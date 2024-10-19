'use client';

import { SubmitButton } from "@/app/component/dashboard/SubmitButton";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, XIcon} from "lucide-react";
import Link from "next/link";
import { createBanner} from "@/app/actions";
import { bannerSchema } from "@/app/lib/zodSchemas";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { useState } from "react";
import { parseWithZod } from "@conform-to/zod";
import Image from "next/image";

export default function BannerRoute() {
    const [image,setImage] = useState<string | undefined>(undefined);
    const [lastResult, action] = useFormState(createBanner, undefined);

    const [form, fields] = useForm({
        lastResult,

        onValidate({formData}) {
            return parseWithZod(formData, {schema: bannerSchema})
        },

        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });

    return (
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
            <div className="flex items-center gap-x-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/dashboard/banner">
                        <ChevronLeft className="w-4 h-4" />
                    </Link>
                </Button>
                <h1 className="text-xl font-semibold tracking-tight">New Banner</h1>
            </div>

            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Banner Details</CardTitle>
                    <CardDescription>Create your banner right here</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input name={fields.title.name} key={fields.title.key} defaultValue={fields.title.initialValue} type="text" placeholder="Create title for Banner" />
                            <p className="text-red-500">{fields.title.errors}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Image</Label>
                            <input type="hidden" value={image} key={fields.imageString.key} name={fields.imageString.name} defaultValue={fields.imageString.initialValue} />
                            {image !== undefined ? (
                                <div className="relative w-[200px] h-[200px]">
                                    <Image src={image} alt="Banner Image" width={200} height={200} className="w-[200px] h-[200px] object-cover rounded-lg" />
                                    <Button onClick={() => setImage(undefined)} type="button" className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white w-8 h-8">
                                        <XIcon className="w-3 h-3" />
                                    </Button>
                                </div>
                            ) : (
                                <UploadDropzone onClientUploadComplete={(res) => {
                                    setImage(res[0].url);
                                }} onUploadError={() => {
                                    alert('Something went wrong...')
                                }} endpoint="bannerImageRoute" />
                            )}

                            <p className="text-red-500">{fields.imageString.errors}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton text="Create Banner" />
                </CardFooter>
            </Card>
        </form>
    )
}