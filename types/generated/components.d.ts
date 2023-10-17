import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface SectionsBlog extends Schema.Component {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'blog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    posts: Attribute.Relation<'sections.blog', 'oneToMany', 'api::post.post'>;
    text: Attribute.Text;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    services: Attribute.Relation<
      'sections.services',
      'oneToMany',
      'api::service.service'
    >;
    text: Attribute.String;
  };
}

export interface SectionsWellcomeSection extends Schema.Component {
  collectionName: 'components_wellcome_section_wellcome_sections';
  info: {
    displayName: 'wellcome';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.link': MenuLink;
      'sections.blog': SectionsBlog;
      'sections.services': SectionsServices;
      'sections.wellcome-section': SectionsWellcomeSection;
    }
  }
}
