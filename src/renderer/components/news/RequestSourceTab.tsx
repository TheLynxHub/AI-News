import {Button, InputGroup, TextField} from '@heroui/react';
import {SiGithub} from '@icons-pack/react-simple-icons';
import {Send} from 'lucide-react';
import {SubmitEvent, useState} from 'react';

import {extensionIpc} from '../../ipc';

export default function RequestSourceTab() {
  const [reqName, setReqName] = useState('');
  const [reqUrl, setReqUrl] = useState('');
  const [reqReason, setReqReason] = useState('');

  const handleSubmitRequest = (e: SubmitEvent) => {
    e.preventDefault();
    if (!reqName.trim() || !reqUrl.trim()) return;

    const title = encodeURIComponent(`[AI News Source Request] ${reqName}`);
    const body = encodeURIComponent(
      `### Source Recommendation\n\n` +
        `**Name:** ${reqName}\n` +
        `**URL:** ${reqUrl}\n` +
        `**Reason/Why we should add it:**\n${reqReason || 'N/A'}\n\n` +
        `*Submitted via AI News Extension*`,
    );

    const issueUrl = `https://github.com/KindaBrazy/LynxHub-AI-News/issues/new?title=${title}&body=${body}`;
    extensionIpc.application.send.openUrlDefaultBrowser(issueUrl);

    // Reset form
    setReqName('');
    setReqUrl('');
    setReqReason('');
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-hidden max-w-xl mx-auto justify-center">
      <div className="bg-surface border border-border p-6 rounded-2xl flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Send className="size-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-extrabold text-foreground">Recommend an AI Source</h3>
            <p className="text-[11px] text-muted">
              Recommend a website blog or YouTube channel to be added as a default news source.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmitRequest} className="flex flex-col gap-4 mt-4">
          <TextField value={reqName} onChange={setReqName} fullWidth>
            <InputGroup>
              <InputGroup.Input placeholder="Source Name (e.g. AI News Daily)" />
            </InputGroup>
          </TextField>

          <TextField value={reqUrl} onChange={setReqUrl} fullWidth>
            <InputGroup>
              <InputGroup.Input placeholder="Website URL or YouTube channel handle" />
            </InputGroup>
          </TextField>

          <TextField value={reqReason} onChange={setReqReason} fullWidth>
            <InputGroup>
              <InputGroup.Input placeholder="Why should this be added? (Brief description)" />
            </InputGroup>
          </TextField>

          <div
            className={
              'p-3 bg-accent/5 border border-accent/15 rounded-xl ' + 'flex items-start gap-2.5 select-none my-1'
            }>
            <SiGithub className="size-4 text-foreground shrink-0 mt-0.5" />
            <p className="text-[10px] text-muted leading-normal">
              Submitting will redirect you to the repository's new issue page on GitHub with pre-filled details. No
              credentials or login required.
            </p>
          </div>

          <Button
            type="submit"
            variant="primary"
            isDisabled={!reqName.trim() || !reqUrl.trim()}
            className="w-full text-xs font-bold rounded-xl mt-1 justify-center">
            <Send className="size-4 mr-2" /> Open Request on GitHub
          </Button>
        </form>
      </div>
    </div>
  );
}
