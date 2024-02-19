import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';

export default function Icon({
  name, size = '18px', color, hoverColor,
}) {
  const LazyIcon = lazy(() => import(`../../../../public/${name}.svg?react`));

  // тут надо как-то переделать, вынести styled за пределы иконки, пока не знаю как
  // ведь тут динамически формируется иконка
  const IconWrapper = styled(LazyIcon)`
    width: ${size};
    height: ${size};

    circle, path {
      stroke: ${color};
    }

    &:hover circle, &:hover path {
      stroke: ${hoverColor};
    }
  `;

  return (
    <Suspense>
      <IconWrapper />
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
