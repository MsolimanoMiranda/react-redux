import React, { useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import AlertActions from '../../redux/reducers/alert/actions';
import './styles.scss';

export const Alert = (props: any) => {
  const dispatch = useDispatch();
  const mapState = useCallback(
    state => ({
      isActive: state.alert.isActive,
      payload: state.alert.payload
    }),
    [] 
  );
  const { isActive, payload = null } = useMappedState(mapState);
  return (
    isActive && (
      <div className={`alert ${payload.className} ${isActive ? 'opened' : ''}`}>
        <div className="alert__body">
          <div className="alert__close" onClick={() => dispatch(AlertActions.remove())}></div>
          {payload.isHtml ? <div className="alert__content" dangerouslySetInnerHTML={{
            __html: `<strong>${payload.message}</strong> ${payload.description}`
          }} /> : <div className="alert__content">
              <strong>{payload.message}</strong> {payload.description}
            </div>}
        </div>
      </div>
    )
  );
}
