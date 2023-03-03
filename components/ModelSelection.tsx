'use client';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/getEngines').then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR('models', fetchModels);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  });

  return (
    <Select
      className="z-50 box-shadow mx-auto mt-2 w-4/5 overflow-hidden border-2 border-black scrollbar-hide "
      options={models?.modelOptions}
      placeholder={model}
      defaultValue={model}
      isSearchable
      isLoading={isLoading}
      menuPosition="fixed"
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#d9d9d9',
          primary: 'black'
        }
      })}
      onChange={(e) => setModel(e.value)}
    />
  );
}

export default ModelSelection;
