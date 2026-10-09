import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { ConditionProgress } from '@/components/condition-progress';
import { conditions } from '@/content/conditions';

const expectedLabels = {
  diabetes: 'A1C',
  pcos: 'Fasting insulin',
  'glp-1': 'Protein',
  'kidney-health': 'Potassium',
  'heart-health': 'LDL',
  'general-nutrition': 'Home-cooked dinners',
};

describe('condition progress cards', () => {
  for (const [slug, label] of Object.entries(expectedLabels)) {
    it(`renders the ${slug} chart label`, () => {
      const condition = conditions.find(c => c.slug === slug);
      expect(condition).toBeDefined();
      if (!condition) return;
      const html = renderToStaticMarkup(<ConditionProgress progress={condition.progress} />);
      expect(html).toContain(`Illustrative ${label} chart`);
      expect(html).toContain(`>${label} <span`);
      expect(html).toContain('Illustrative example only. Individual results vary.');
    });
  }
});
