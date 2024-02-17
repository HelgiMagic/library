import React, { Suspense, lazy } from 'react';

export default function Icon({ name, size = '18px', color }) {
  const LazyIcon = lazy(() => import(`../../../../public/${name}.svg?react`));

  const style = {
    width: size,
    height: size,
    fill: color,
  };

  return (
    <Suspense>
      <LazyIcon style={style} />
    </Suspense>
  );
}
// export default function Icon({ name, size = '18px' }) {
//   const styles = {
//     width, height,
//   };

//   return (
//     <img src={`../../public/${name}.svg`} alt="svg icon" size={size} />
//   );
// }
