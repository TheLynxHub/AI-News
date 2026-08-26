import {Button, ButtonGroup, Chip, InputGroup, ScrollShadow, Spinner, Switch, TextField} from '@heroui/react';
import {SiYoutube} from '@icons-pack/react-simple-icons';
import LynxSwitch from '@lynx/components/LynxSwitch';
import {NewsSource} from '@lynx_extension/cross/types';
import {EarthIcon, TrashBin2Icon} from '@solar-icons/react/bold-duotone';
import {Plus} from 'lucide-react';
import {SubmitEvent, useState} from 'react';

interface ManageSourcesTabProps {
  sources: NewsSource[];
  homeView: 'default' | 'compact';
  showInHome: boolean;
  onToggleSource: (sourceId: string, enabled: boolean) => Promise<void>;
  onToggleAllSources: (enabled: boolean) => Promise<void>;
  onDeleteSource: (sourceId: string) => Promise<void>;
  onToggleHomeView: (view: 'default' | 'compact') => Promise<void>;
  onToggleShowInHome: (show: boolean) => Promise<void>;
  onAddSource: (type: 'website' | 'youtube', url: string) => Promise<void>;
}

export default function ManageSourcesTab({
  sources,
  homeView,
  showInHome,
  onToggleSource,
  onToggleAllSources,
  onDeleteSource,
  onToggleHomeView,
  onToggleShowInHome,
  onAddSource,
}: ManageSourcesTabProps) {
  // Add source states
  const [addType, setAddType] = useState<'website' | 'youtube'>('website');
  const [addUrl, setAddUrl] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState('');
  const [addSuccess, setAddSuccess] = useState('');

  const handleAddSource = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!addUrl.trim()) return;

    setAdding(true);
    setAddError('');
    setAddSuccess('');

    try {
      await onAddSource(addType, addUrl);
      setAddUrl('');
      setAddSuccess(`Successfully added custom ${addType}!`);
    } catch (err: any) {
      setAddError(err.message || 'Failed to add custom source.');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden p-6 gap-6">
      {/* Add Custom Source form */}
      <div className={'w-1/2 flex flex-col shrink-0'}>
        <h3 className="text-sm font-extrabold text-foreground mb-1">Add Feed Source</h3>
        <p className="text-[11px] text-muted mb-4">
          Type a website URL to discover its feed, or enter a YouTube channel link.
        </p>

        <form onSubmit={handleAddSource} className="flex flex-col gap-4">
          <ButtonGroup className="bg-surface rounded-3xl shadow-surface" fullWidth>
            <Button
              type="button"
              onPress={() => setAddType('website')}
              variant={addType === 'website' ? 'primary' : 'ghost'}>
              <EarthIcon className="size-4" /> Website Blog
            </Button>
            <Button
              type="button"
              onPress={() => setAddType('youtube')}
              variant={addType === 'youtube' ? 'primary' : 'ghost'}>
              <SiYoutube className="size-4 text-red-700" /> YouTube Channel
            </Button>
          </ButtonGroup>

          <TextField value={addUrl} onChange={setAddUrl} fullWidth>
            <InputGroup>
              <InputGroup.Input
                placeholder={
                  addType === 'website'
                    ? 'e.g. techcrunch.com/category/artificial-intelligence'
                    : 'e.g. @theAIsearch or channel link'
                }
                disabled={adding}
              />
            </InputGroup>
          </TextField>

          {addError && <p className="text-[11px] text-danger font-bold">{addError}</p>}
          {addSuccess && <p className="text-[11px] text-success font-bold">{addSuccess}</p>}

          <Button type="submit" variant="primary" isDisabled={adding || !addUrl.trim()} fullWidth>
            {adding ? (
              <>
                <Spinner size="sm" color="current" /> Saving source...
              </>
            ) : (
              <>
                <Plus /> Add News Source
              </>
            )}
          </Button>
        </form>

        {/* Preferences Section */}
        <div className="mt-6 pt-5 border-t border-border flex flex-col gap-3">
          <h4 className="text-xs font-extrabold text-foreground tracking-wide uppercase select-none">
            Layout Preferences
          </h4>
          <LynxSwitch
            enabled={showInHome}
            title="Show News on Home Page"
            onEnabledChange={val => onToggleShowInHome(val)}
            description={<span className="text-[11px]">Display the news widget on the LynxHub home page.</span>}
          />
          <LynxSwitch
            description={
              <span className="text-[11px]">Use compact cards on the home page instead of the coverflow carousel.</span>
            }
            title="Compact Home Layout"
            enabled={homeView === 'compact'}
            onEnabledChange={val => onToggleHomeView(val ? 'compact' : 'default')}
          />
        </div>
      </div>

      {/* Sources List panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-3 shrink-0">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-1.5">
            Active Sources{' '}
            <Chip size="sm" color="accent">
              {sources.length}
            </Chip>
          </h3>
          <div className="flex gap-1">
            <Button size="sm" variant="ghost" onPress={() => onToggleAllSources(true)}>
              Enable All
            </Button>
            <Button size="sm" variant="ghost" onPress={() => onToggleAllSources(false)}>
              Disable All
            </Button>
          </div>
        </div>
        <ScrollShadow className="flex-1 pr-2">
          <div className="flex flex-col gap-3">
            {sources.map(src => (
              <div
                key={src.id}
                onClick={() => onToggleSource(src.id, !src.enabled)}
                className={'bg-surface p-3 cursor-pointer rounded-3xl flex items-center justify-between gap-4'}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className={'size-9 rounded-full bg-surface-secondary flex items-center justify-center shrink-0'}>
                    {src.type === 'youtube' ? (
                      <SiYoutube className="size-4.5 text-red-600" />
                    ) : (
                      <EarthIcon className="size-4.5 text-accent" />
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xs font-bold text-foreground truncate max-w-50">{src.name}</h4>
                    <span className="text-[10px] text-muted truncate max-w-60">{src.url}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Switch to enable/disable */}
                  <Switch isSelected={src.enabled} onChange={val => onToggleSource(src.id, val)}>
                    <Switch.Content>
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                    </Switch.Content>
                  </Switch>

                  {/* Delete button (only show for custom sources) */}
                  {!src.isDefault && (
                    <Button size="sm" variant="danger-soft" onPress={() => onDeleteSource(src.id)} isIconOnly>
                      <TrashBin2Icon />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
}
