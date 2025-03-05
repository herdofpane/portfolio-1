import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/crediterdebiter.png';
import imageSprComponentsDarkPlaceholder from '~/assets/crediterdebiter.png';
import imageSprComponentsDark from '~/assets/crediterdebiter.png';
import imageSprComponentsLightLarge from '~/assets/crediterdebiter.png';
import imageSprComponentsLightPlaceholder from '~/assets/crediterdebiter.png';
import imageSprComponentsLight from '~/assets/crediterdebiter.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './appBank.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Développement d’une application bancaire';
const description =
(
  <>
    Étude et rédaction du cahier des charges, développement en Java et intégration avec une base de données, ainsi que rédaction de documentations techniques et utilisateur.{' '}
    <a href="https://github.com/herdofpane/sae2023-bank-2b4" target="_blank" rel="noopener noreferrer">
      Voir sur GitHub
    </a>
  </>
  );
const roles = [
 'Réaliser',
  'Gérer',
  'Conduire',
  'Administrer',
  'Collaborer'

];


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
      <ProjectBackground
        opacity={isDark ? 0.5 : 0.8}
        src="path/to/background.jpg"
        srcSet={`path/to/background.jpg 1080w, path/to/background-large.jpg 2160w`}
        placeholder="path/to/background-placeholder.jpg"
      />
      <ProjectHeader title={title} description={description} roles={roles} />
      <ProjectSection padding="top">
        <ProjectSectionContent>
          <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1280w, ${imageSprComponentsDarkLarge} 2560w`
                  : `${imageSprComponentsLight} 1280w, ${imageSprComponentsLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Illustration de la boutique en ligne."
            />
        </ProjectSectionContent>
      </ProjectSection>
      <ProjectSection padding="top">
        <ProjectSectionContent>
          <ProjectTextRow>
            <ProjectSectionHeading>Objectif du projet</ProjectSectionHeading>
            <ProjectSectionText>
              L’objectif de ce projet était de développer une application bancaire complète, incluant l'étude et la rédaction du cahier des charges, le développement en Java, et l'intégration avec une base de données. Le projet comprenait également la rédaction de documentations techniques et utilisateur.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSectionContent>
      </ProjectSection>
      <ProjectSection light={isDark}>
        <ProjectSectionContent>
          <ProjectTextRow>
            <ProjectSectionHeading>Technologies utilisées</ProjectSectionHeading>
          </ProjectTextRow>
          <ProjectTextRow>
            <ProjectSectionContent>
              <ProjectSectionText>
                <ul>
                  <li><strong>Langage de programmation :</strong> Java pour le développement de l'application.</li>
                  <li><strong>Base de données :</strong> Intégration avec une base de données pour la gestion des données bancaires.</li>
                  <li><strong>Documentation :</strong> Rédaction de documentations techniques et utilisateur pour une meilleure compréhension et utilisation de l'application.</li>
                </ul>
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectTextRow>
        </ProjectSectionContent>
      </ProjectSection>
    </ProjectContainer>
      <Footer />
    </>
  );
};
