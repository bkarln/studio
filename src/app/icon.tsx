import { ImageResponse } from 'next/og'
import { CheckSquare } from 'lucide-react';

export const dynamic = "force-static";
export const size = {
  width: 32,
  height: 32,
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#00008B',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
        }}
      >
        <CheckSquare style={{ width: '20px', height: '20px' }}/>
      </div>
    ),
    {
      ...size,
    }
  );
}
