import type { Progress } from '@/content/conditions';

export function ConditionProgress({ progress }: { progress: Progress }) {
  const low = Math.min(progress.start, progress.end, progress.goal);
  const high = Math.max(progress.start, progress.end, progress.goal);
  const span = high - low || 1;
  const y = (value: number) => 118 - ((value - low) / span) * 88;
  const startY = y(progress.start);
  const endY = y(progress.end);
  const goalY = y(progress.goal);
  const curve = `M12 ${startY} C110 ${startY} 280 ${endY} 388 ${endY}`;
  return <div className="card-frame p-6 md:p-8">
    <div className="flex justify-between items-center gap-3"><p className="eyebrow">Your progress</p><span className="font-mono text-[10px] text-muted-foreground text-right">EXAMPLE CLIENT VIEW</span></div>
    <p className="text-sm font-semibold mt-6">{progress.chartLabel} <span className="text-muted-foreground font-normal">{progress.unit}</span></p>
    <div className="mt-1"><svg viewBox="0 0 400 160" role="img" aria-label={`Illustrative ${progress.chartLabel} chart showing a change from ${progress.start} to ${progress.end} ${progress.unit}, ${progress.direction === 'down' ? 'decreasing' : 'increasing'} toward a goal of ${progress.goal}; not an outcome claim`} className="w-full">
      <line x1="10" y1={goalY} x2="390" y2={goalY} stroke="var(--navy)" strokeDasharray="5 5" opacity=".35" />
      <text x="300" y={goalY < 45 ? goalY + 15 : goalY - 7} fill="currentColor" fontSize="11">{progress.goalLabel}</text>
      <path d={curve} fill="none" stroke="var(--brand-text)" strokeWidth="4" />
      <circle cx="12" cy={startY} r="5" fill="var(--brand-text)" /><circle cx="388" cy={endY} r="5" fill="var(--amber)" />
      <text x="12" y={startY < 45 ? startY + 22 : startY - 11} fill="currentColor" fontSize="14">{progress.start}</text>
      <text x="355" y={endY > 105 ? endY - 11 : endY + 23} fill="currentColor" fontSize="14">{progress.end}</text>
    </svg></div>
    <div className="border-t border-border mt-3">{progress.rows.map(([label, value, change]) => <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-3 border-b border-border py-3 text-sm items-center"><span className="text-muted-foreground">{label}</span><strong className="text-right">{value}</strong><span className="text-brand-text text-xs text-right min-w-10">{change}</span></div>)}</div>
    <p className="text-[11px] text-muted-foreground mt-4">Illustrative example only. Individual results vary.</p>
  </div>;
}
