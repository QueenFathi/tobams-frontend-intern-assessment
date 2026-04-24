export default function H2({ text, mdhidden, textcolor }: { text: string, mdhidden?: boolean, textcolor?: string }) {
    return (
        <h2 className={`font-semibold text-main text-2xl md:text-4xl xl:text-5xl ${textcolor} font-nunito tracking-wider mb-0 lg:mb-10 ${mdhidden == true ? "lg:hidden" : mdhidden == false ? "hidden lg:block" : "block"}`}>
            {text}
        </h2>
    )
}