import type { Service, CompanyInfo } from '../../types/sanity';

export const myCompanyInfo: CompanyInfo = {
    _type: 'companyInfo',
    name: 'Juan Pablo II',
    legalName: 'Construcciones Juan Pablo II S.A.S.',
    description: 'Somos una empresa constructora líder en el Oriente Antioqueño, comprometida con la calidad, la innovación y el desarrollo sostenible de nuestra región. Con años de experiencia, transformamos sueños en realidades tangibles.',
    address: 'San Carlos, Antioquia, Colombia',
    phone: '+57 300 123 4567',
    email: 'contacto@construccionesjuanpabloii.com',
    coordinates: {
        lat: 6.188,
        lng: -74.996
    },
    socials: [
        { platform: 'Instagram', url: 'https://instagram.com' },
        { platform: 'Facebook', url: 'https://facebook.com' }
    ]
};

export const mockServices: Service[] = [
    {
        _id: '1',
        _type: 'service',
        title: 'Obra Civil',
        description: 'Ejecución de proyectos de infraestructura y edificación con los más altos estándares de calidad.',
        icon: 'hammer'
    },
    {
        _id: '2',
        _type: 'service',
        title: 'Remodelaciones',
        description: 'Transformamos espacios existentes para adaptarlos a nuevas necesidades y estilos de vida.',
        icon: 'paint-roller'
    },
    {
        _id: '3',
        _type: 'service',
        title: 'Diseño Arquitectónico',
        description: 'Planificación y diseño de espacios funcionales y estéticamente atractivos.',
        icon: 'ruler-combined'
    }
];