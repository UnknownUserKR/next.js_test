import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

interface iAppProps {
    email: string;
    name: string;
    userIamge: string;
}

export async function UserDropDown({email, name, userIamge}: iAppProps) {
    const { getUser } = getKindeServerSession()
    const user = await getUser();

    const isAuthorised = user.email === "kkmj1150@gmail.com" || user.email == "thandarkhaing182@gmail.com"

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={userIamge} alt="User Image" />
                        <AvatarFallback>{name.slice(0, 3)}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="flex flex-col space-y-1">
                    <p className="text-lg leading-none font-bold">{name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isAuthorised && (
                    <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                    <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}