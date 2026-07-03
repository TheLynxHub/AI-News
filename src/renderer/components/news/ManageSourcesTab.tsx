import {Button, InputGroup, ScrollShadow, Spinner, Switch, TextField} from '@heroui/react';
import {SiYoutube} from '@icons-pack/react-simple-icons';
import {NewsSource} from '@lynx_extension/cross/types';
import {Earth} from '@solar-icons/react-perf/BoldDuotone';
import {Plus, Trash2, Video} from 'lucide-react';
import {FormEvent, useState} from 'react';

interface ManageSourcesTabProps {
  sources: NewsSource[];
  homeView: 'default' | 'compact';
  onToggleSource: (sourceId: string, enabled: boolean) => Promise<void>;
  onDeleteSource: (sourceId: string) => Promise<void>;
  onToggleHomeView: (view: 'default' | 'compact') => Promise<void>;
  onAddSource: (type: 'website' | 'youtube', url: string) => Promise<void>;
}

export default function ManageSourcesTab({
  sources,
  homeView,
  onToggleSource,
  onDeleteSource,
  onToggleHomeView,
  onAddSource,
}: ManageSourcesTabProps) {
  // Add source states
  const [addType, setAddType] = useState<'website' | 'youtube'>('website');
  const [addUrl, setAddUrl] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState('');
  const [addSuccess, setAddSuccess] = useState('');

  const handleAddSource = async (e: FormEvent) => {
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
      <div className={'w-1/2 flex flex-col bg-surface border border-border ' + 'p-5 rounded-2xl shrink-0'}>
        <h3 className="text-sm font-extrabold text-foreground mb-1">Add Feed Source</h3>
        <p className="text-[11px] text-muted mb-4">
          Type a website URL to discover its feed, or enter a YouTube channel link.
        </p>

        <form onSubmit={handleAddSource} className="flex flex-col gap-4">
          <div className="flex bg-surface-secondary p-0.5 rounded-xl border border-border w-full shrink-0">
            <Button
              type="button"
              onPress={() => setAddType('website')}
              variant={addType === 'website' ? 'primary' : 'ghost'}
              className="flex-1 text-[10px] font-bold py-1.5 rounded-lg">
              <Earth className="size-3 mr-1" /> Website Blog
            </Button>
            <Button
              type="button"
              onPress={() => setAddType('youtube')}
              variant={addType === 'youtube' ? 'primary' : 'ghost'}
              className="flex-1 text-[10px] font-bold py-1.5 rounded-lg">
              <Video className="size-3 mr-1" /> YouTube Channel
            </Button>
          </div>

          <TextField value={addUrl} onChange={setAddUrl} fullWidth>
            <InputGroup>
              <InputGroup.Input
                placeholder={
                  addType === 'website' ? 'e.g. venturebeat.com/category/ai' : 'e.g. @mreflow or channel link'
                }
                disabled={adding}
              />
            </InputGroup>
          </TextField>

          {addError && <p className="text-[11px] text-danger font-bold">{addError}</p>}
          {addSuccess && <p className="text-[11px] text-success font-bold">{addSuccess}</p>}

          <Button
            type="submit"
            variant="primary"
            isDisabled={adding || !addUrl.trim()}
            className="w-full text-xs font-bold rounded-xl mt-2 justify-center">
            {adding ? (
              <>
                <Spinner size="sm" color="current" className="mr-2" /> Saving source...
              </>
            ) : (
              <>
                <Plus className="size-4 mr-2" /> Add News Source
              </>
            )}
          </Button>
        </form>

        {/* Preferences Section */}
        <div className="mt-6 pt-5 border-t border-border flex flex-col gap-3">
          <h4 className="text-xs font-extrabold text-foreground tracking-wide uppercase select-none">
            Layout Preferences
          </h4>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-foreground">Compact Home Layout</span>
              <span className="text-[10px] text-muted">
                Use compact cards on the home page instead of the coverflow carousel.
              </span>
            </div>
            <Switch isSelected={homeView === 'compact'} onChange={val => onToggleHomeView(val ? 'compact' : 'default')}>
              <Switch.Content>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Content>
            </Switch>
          </div>
        </div>
      </div>

      {/* Sources List panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <h3 className="text-sm font-extrabold text-foreground mb-2 shrink-0">Active Sources ({sources.length})</h3>
        <ScrollShadow className="flex-1 pr-2 scrollbar-hide">
          <div className="flex flex-col gap-3">
            {sources.map(src => (
              <div
                className={
                  'bg-surface border border-border p-3 ' + 'rounded-2xl flex items-center justify-between gap-4'
                }
                key={src.id}>
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={
                      'size-9 rounded-full bg-surface-secondary ' + 'flex items-center justify-center shrink-0'
                    }>
                    {src.type === 'youtube' ? (
                      <SiYoutube className="size-4.5 text-red-600" />
                    ) : (
                      <Earth className="size-4 text-accent" />
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
                  {src.id.startsWith('website-') && (
                    <Button
                      variant="ghost"
                      onPress={() => onDeleteSource(src.id)}
                      className="size-7 min-w-0 p-0 text-danger rounded-lg hover:bg-danger/10 border-0">
                      <Trash2 className="size-3.5" />
                    </Button>
                  )}
                  {src.id.startsWith('youtube-') &&
                    src.id !== 'youtube-theaisearch' &&
                    src.id !== 'youtube-mreflow' && (
                      <Button
                        variant="ghost"
                        onPress={() => onDeleteSource(src.id)}
                        className="size-7 min-w-0 p-0 text-danger rounded-lg hover:bg-danger/10 border-0">
                        <Trash2 className="size-3.5" />
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
