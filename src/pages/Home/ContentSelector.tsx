import React, { useCallback } from 'react';
import { contentByWhatState } from '@recoil/atoms/selectionAtom';
import { useRecoilState } from 'recoil';
import RadioButton from '@components/RadioButton';
import { contentSelector } from './constants';
import { SelectValue } from 'types';
import { joinClass } from '@utils/styleUtil';

const ContentSelector = () => {
  const [content, setContent] = useRecoilState(contentByWhatState);

  const onContentSelect = useCallback(
    (id: string) => {
      setContent(id as SelectValue);
    },
    [setContent],
  );

  return (
    <ul
      onChange={(e) => onContentSelect((e.target as HTMLInputElement).value)}
      className="grid grid-cols-3 justify-center w-fit ml-3 bg-gray-100 rounded-md shadow-md text-gray-700 font-medium text-sm overflow-hidden"
    >
      {Object.keys(contentSelector).map((key) => (
        <li key={key}>
          <RadioButton
            classes={joinClass(
              'block hover:text-gray-50 hover:bg-blue-500 cursor-pointer py-2 px-4',
              content === key ? 'bg-blue-500 text-blue-50' : '',
            )}
            name="contentSelector"
            id={key}
            value={key}
            indicator={contentSelector[key]}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContentSelector;
