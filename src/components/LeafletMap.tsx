type Props = {
  lat: number;
  lng: number;
  zoom?: number;
  label?: string;
  height?: number;
};

export function LeafletMap({ lat, lng, zoom = 15, height = 380 }: Props) {
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height,
        borderRadius: 12,
        border: "1px solid rgba(232,130,74,0.3)",
        boxShadow: "0 0 24px rgba(232,130,74,0.15)",
      }}
    >
      <iframe
        src={src}
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}