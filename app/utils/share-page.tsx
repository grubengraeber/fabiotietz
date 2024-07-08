"use client"

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useAppContext } from "@/context/app-context"
import ShareButtons from "../components/share/share-buttons";

export function SharePage() {
    const toggleSharePanel = () => {
        setShowSharePanel(!showSharePanel)
      };

    const { showSharePanel, setShowSharePanel } = useAppContext();

    return (
        <AlertDialog open={showSharePanel} onOpenChange={toggleSharePanel}>
            <AlertDialogContent>
            <AlertDialogTitle hidden>Share My Portfolio Page</AlertDialogTitle> {/* TODO: Language */}
            <AlertDialogDescription hidden>A dialog for the different possibilities to share the website</AlertDialogDescription> {/* TODO: Language */}
                <ShareButtons />
                <AlertDialogCancel>
                    Cancel {/* TODO: Language */}
                </AlertDialogCancel>
            </AlertDialogContent>
            <AlertDialogFooter>
            </AlertDialogFooter>
        </AlertDialog>
    )
}