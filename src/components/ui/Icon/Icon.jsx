import React, { Suspense, lazy } from 'react';
import Wrapper from './Icon.styled';

export default function Icon({
  name, size = '18px', color, hoverColor,
}) {
  const LazyIcon = lazy(() => import(`../../../../public/${name}.svg?react`));

  return (
    <Suspense>
      <Wrapper size={size} color={color} hoverColor={hoverColor}>
        <LazyIcon />
      </Wrapper>
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
