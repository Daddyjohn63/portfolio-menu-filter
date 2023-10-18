import MenuItem from './MenuItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      <TransitionGroup component={null}>
        {items.map(menuItem => (
          <CSSTransition key={menuItem.id} timeout={500} classNames="item">
            <div>
              <MenuItem {...menuItem} />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default Menu;

// const Menu = ({ items }) => {
//   return (
//     <div className="section-center">
//       {items.map(menuItem => {
//         return <MenuItem key={menuItem.id} {...menuItem} />;
//       })}
//     </div>
//   );
// };
// export default Menu;
