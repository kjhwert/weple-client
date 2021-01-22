import React, {useState, useContext, useEffect} from 'react';
import TogetherPostMethodPresenter from './TogetherPostMethodPresenter';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createRoom}: any = useContext(TogetherContext);

  const radioBoxData = [
    {
      label: '공개모집',
      value: true,
    },
    {
      label: '비공개모집',
      value: false,
    },
  ];

  const [activeFlag, setActiveFlag] = useState({
    togetherTagsFlag: 0,
  });

  useEffect(() => {
    setActiveFlag({
      ...activeFlag,
      togetherTagsFlag: createRoom.togetherTags.length,
    });
  }, [createRoom]);

  return <TogetherPostMethodPresenter navigation={navigation} radioBoxData={radioBoxData} activeFlag={activeFlag} />;
};
