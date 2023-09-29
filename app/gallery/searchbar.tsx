"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function SearchBar() {
    const [tagName, setTagName] = useState("")
    return (
        <form
            onSubmit={e => e.preventDefault()}
        >
            <Label htmlFor="tag-name">
                Search by Tag
            </Label>
            <div className="flex gap-2 mt-1">
                <Input
                    onChange={e => setTagName(e.currentTarget.value)}
                    id="tag-name" value={tagName} className="col-span-3"
                />
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
}
