import Image from "next/image";
import { Pokemon } from "@/types/pokemon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/* 重さ・高さの表記調整 */
const adjustWeiHeight = (targetHeightNum: number) => {
  const targetHeight: string = String(targetHeightNum);
  if (targetHeight.length === 1) {
    /* 1桁の場合は xxx.0 の形にして反転（0.xxx）させる */
    return String(targetHeightNum.toFixed(1)).split("").reverse().join("");
  } else {
    const shallowCopy: string[] = Array.from(String(targetHeightNum)); // 配列に変換する
    shallowCopy.splice(-1, 0, "."); // 末尾の文字列の前に . を追加する
    return shallowCopy.join(""); // 文字列にして返す
  }
};

export function PokeItem({ pokeData }: { pokeData: Pokemon }) {
  return (
    <div className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] p-3 rounded">
      <Dialog>
        <DialogTrigger>
          <h2>
            <span className="block text-xs">No. {pokeData.id}</span>
            {pokeData.name}
          </h2>
          <Image className="cursor-pointer" src={pokeData.img || ""} alt={pokeData.name} width={100} height={100} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Image
                src={pokeData.officialImg || ""}
                alt={`${pokeData.name}のオフィシャル画像`}
                width={300}
                height={300}
              />
            </DialogTitle>
            <DialogDescription className="text-left">
              <p className="text-base font-bold">{pokeData.name}</p>
              {pokeData.type ? <p>{pokeData.type}</p> : undefined}
              <div className="flex gap-3">
                <p>高さ：{adjustWeiHeight(pokeData.height)}m</p>
                <p>重さ：{adjustWeiHeight(pokeData.weight)}kg</p>
              </div>
              {pokeData.flavor_text ? (
                <p className="border-t border-dotted border-[#737373] pt-1 mt-1">{pokeData.flavor_text}</p>
              ) : undefined}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
