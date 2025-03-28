import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://joshua-jourdam.vercel.app/profile.jpg`}
        alt="Profile"
        style={{ objectFit: "cover", borderRadius: "25%" }}
        width={size.width}
        height={size.height}
      />
    ),
    {
      ...size,
    }
  );
}
