import * as assert from 'assert';
import {
  IPeacockSettings,
  IPeacockElementAdjustments,
  Commands,
  ColorSettings,
  IPeacockAffectedElementSettings,
  peacockGreen,
} from '../../models/extension';
import { setupTestSuite, teardownTestSuite, setupTest } from './lib/setup-teardown-test-suite';
import {
  updateElementAdjustments,
  getColorCustomizationConfig,
  updateAffectedElements,
} from '../../configuration';
import { executeCommand, allAffectedElements } from './lib/constants';
import { getLightenedColorHex, getDarkenedColorHex, getColorBrightness } from '../../color-library';

suite('Element adjustments', () => {
  const originalValues = {} as IPeacockSettings;

  suiteSetup(async () => await setupTestSuite(originalValues));
  suiteTeardown(async () => await teardownTestSuite(originalValues));
  setup(async () => await setupTest());

  const elementAdjustments: IPeacockElementAdjustments = {
    activityBar: 'lighten',
    statusBar: 'darken',
    titleBar: 'none',
  };

  suiteSetup(async () => {
    await updateElementAdjustments(elementAdjustments);
  });

  test('can lighten the color of an affected element', async () => {
    await executeCommand(Commands.changeColorToPeacockGreen);
    const config = getColorCustomizationConfig();
    assert.equal(getLightenedColorHex(peacockGreen), config[ColorSettings.activityBar_background]);
  });

  test('can darken the color of an affected element', async () => {
    await executeCommand(Commands.changeColorToPeacockGreen);
    const config = getColorCustomizationConfig();
    assert.equal(getDarkenedColorHex(peacockGreen), config[ColorSettings.statusBar_background]);
  });

  test('set adjustment to none for an affected element is noop', async () => {
    await executeCommand(Commands.changeColorToPeacockGreen);
    const config = getColorCustomizationConfig();
    assert.equal(peacockGreen, config[ColorSettings.titleBar_activeBackground]);
  });

  test('set adjustment to lighten for an affected element is lighter color', async () => {
    await executeCommand(Commands.changeColorToPeacockGreen);
    const config = getColorCustomizationConfig();

    const originalBrightness = getColorBrightness(peacockGreen);
    const adjustedBrightness = getColorBrightness(config[ColorSettings.activityBar_background]);
    assert.ok(
      originalBrightness < adjustedBrightness,
      `Expected original brightness ${originalBrightness} to be less than ${adjustedBrightness}, but was greater`,
    );
  });

  test('set adjustment to darken for an affected element is darker color', async () => {
    await executeCommand(Commands.changeColorToPeacockGreen);
    const config = getColorCustomizationConfig();

    const originalBrightness = getColorBrightness(peacockGreen);
    const adjustedBrightness = getColorBrightness(config[ColorSettings.statusBar_background]);
    assert.ok(
      originalBrightness > adjustedBrightness,
      `Expected original brightness ${originalBrightness} to be greater than ${adjustedBrightness}, but was less`,
    );
  });

  test('can adjust the color of an affected elements independently', async () => {
    await executeCommand(Commands.changeColorToPeacockGreen);
    const config = getColorCustomizationConfig();
    assert.equal(getLightenedColorHex(peacockGreen), config[ColorSettings.activityBar_background]);
    assert.equal(getDarkenedColorHex(peacockGreen), config[ColorSettings.statusBar_background]);
    assert.equal(peacockGreen, config[ColorSettings.titleBar_activeBackground]);
  });

  test('can only adjust the color of an element that is affected', async () => {
    await updateAffectedElements({
      activityBar: false,
      statusBar: true,
      titleBar: false,
    } as IPeacockAffectedElementSettings);

    await executeCommand(Commands.changeColorToPeacockGreen);
    const config = getColorCustomizationConfig();

    assert.equal(getDarkenedColorHex(peacockGreen), config[ColorSettings.statusBar_background]);
    assert.ok(!config[ColorSettings.activityBar_background]);
    assert.ok(!config[ColorSettings.titleBar_activeBackground]);

    await updateAffectedElements(allAffectedElements);
  });
});
