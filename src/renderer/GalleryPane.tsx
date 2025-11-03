interface GalleryPaneProps {
  payload: Record<string, any>;
}

export function GalleryPane({ payload }: GalleryPaneProps) {
  const assets = (payload.assets || []) as string[];

  return (
    <div className="grid grid-cols-2 gap-3">
      {assets.map((src, i) => (
        <div
          key={i}
          className="
            aspect-square rounded-xl overflow-hidden
            bg-slate-800 border border-white/10
          "
        >
          <img
            src={src}
            alt={`Image ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

