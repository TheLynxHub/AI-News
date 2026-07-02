import {useOverlayState} from '@heroui/react';
import {ToolsCard} from '@lynx/components/ToolsCard';
import {Plain2} from '@solar-icons/react-perf/BoldDuotone';

import NewsDashboardModal from './NewsDashboardModal';

export default function NewsCard() {
  const modalState = useOverlayState();

  return (
    <>
      <ToolsCard
        description={
          'Stay up to date with the latest artificial intelligence news, ' +
          'articles, and videos from your favorite sites and YouTube channels.'
        }
        title="AI News"
        onPress={() => modalState.open()}
        icon={<Plain2 className="size-7 text-indigo-500" />}
        footer={<div className="text-[10px] text-accent font-semibold hover:underline">Open Feed</div>}
      />
      <NewsDashboardModal
        isOpen={modalState.isOpen}
        onOpenChange={isOpen => (isOpen ? modalState.open() : modalState.close())}
      />
    </>
  );
}
