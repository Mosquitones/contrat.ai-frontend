import {
  EMPLOYMENT_TYPE_ENUM,
  GENDER_ENUM,
  LOCATION_TYPE_ENUM,
  RACE_ETHNICITY_ENUM,
  SEXUAL_ORIENTATION_ENUM,
  FAMILY_INCOME_ENUM,
  VULNERABILITY_ENUM,
  PHASE_STATUS_TYPE_ENUM,
} from './enums'

export const EMPLOYMENT_TYPE_LIST = [
  {
    key: EMPLOYMENT_TYPE_ENUM.FULL_TIME,
    label: 'Período integral',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.PART_TIME,
    label: 'Período parcial',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.SELF_EMPLOYED,
    label: 'Autônomo',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.FREELANCE,
    label: 'Freelancer',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.CONTRACT,
    label: 'Contrato',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.INTERNSHIP,
    label: 'Estágio',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.APPRENTICESHIP,
    label: 'Estágio de aprendiz',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.LEADERSHIP_PROGRAM,
    label: 'Programa de liderança',
  },
  {
    key: EMPLOYMENT_TYPE_ENUM.INDIRECT_CONTRACT,
    label: 'Contrato indireto',
  },
] as const

export const LOCATION_TYPE_LIST = [
  {
    key: LOCATION_TYPE_ENUM.ON_SITE,
    label: 'Presencial',
  },
  {
    key: LOCATION_TYPE_ENUM.REMOTE,
    label: 'Remoto',
  },
  {
    key: LOCATION_TYPE_ENUM.HYBRID,
    label: 'Híbrido',
  },
] as const

export const GENDER_LIST = [
  {
    label:
      'Homem cisgênero (que se identifica com o gênero que lhe foi atribuído ao nascer)',
    value: GENDER_ENUM.MASCULINE,
  },
  {
    label:
      'Mulher cisgênera (que se identifica com o gênero que lhe foi atribuída ao nascer)',
    value: GENDER_ENUM.FEMININE,
  },
  {
    label:
      'Não binário (Pessoa cuja identidade de gênero não está limitada às definições de masculino ou feminino)',
    value: GENDER_ENUM.NEUTER,
  },
  {
    label: 'Outro',
    value: GENDER_ENUM.OTHER,
  },
  {
    label: 'Prefiro não responder',
    value: GENDER_ENUM.UNKNOWN,
  },
] as const

export const GENDER_MINIFIED_LIST = [
  {
    label: 'Homem cisgênero',
    value: GENDER_ENUM.MASCULINE,
  },
  {
    label: 'Mulher cisgênera',
    value: GENDER_ENUM.FEMININE,
  },
  {
    label: 'Não binário',
    value: GENDER_ENUM.NEUTER,
  },
  {
    label: 'Outro',
    value: GENDER_ENUM.OTHER,
  },
  {
    label: 'Prefiro não responder',
    value: GENDER_ENUM.UNKNOWN,
  },
] as const

export const SEXUAL_ORIENTATION_LIST = [
  {
    label: 'Heterossexual (afinidade, atração com a pessoa do sexo oposto)',
    value: SEXUAL_ORIENTATION_ENUM.HETEROSEXUAL,
  },
  {
    label: 'Homossexual (afinidade, atração com a pessoa do mesmo sexo)',
    value: SEXUAL_ORIENTATION_ENUM.HOMOSEXUAL,
  },
  {
    label: 'Bissexual (afinidade, atração por mais de um gênero)',
    value: SEXUAL_ORIENTATION_ENUM.BISEXUAL,
  },
  {
    label:
      'Pansexual (afinidade, atração que independe do sexo ou identidade de gênero da outra pessoa)',
    value: SEXUAL_ORIENTATION_ENUM.PANSEXUAL,
  },
  {
    label: 'Assexual (possui pouco ou nenhum desejo sexual)',
    value: SEXUAL_ORIENTATION_ENUM.ASEXUAL,
  },
  {
    label: 'Outro',
    value: SEXUAL_ORIENTATION_ENUM.OTHER,
  },
  {
    label: 'Prefiro não responder',
    value: SEXUAL_ORIENTATION_ENUM.UNKNOWN,
  },
] as const

export const RACE_ETHNICITY_LIST = [
  {
    label: 'Branco',
    value: RACE_ETHNICITY_ENUM.WHITE,
  },
  {
    label: 'Amarelo',
    value: RACE_ETHNICITY_ENUM.YELLOW,
  },
  {
    label: 'Indígena',
    value: RACE_ETHNICITY_ENUM.INDIGENOUS,
  },
  {
    label: 'Pardo',
    value: RACE_ETHNICITY_ENUM.HYSPANIC,
  },
  {
    label: 'Preto',
    value: RACE_ETHNICITY_ENUM.BLACK,
  },
  {
    label: 'Não sei responder',
    value: RACE_ETHNICITY_ENUM.DONT_KNOW,
  },
  {
    label: 'Prefiro não responder',
    value: RACE_ETHNICITY_ENUM.UNKNOWN,
  },
  {
    label: 'Outro',
    value: RACE_ETHNICITY_ENUM.OTHER,
  },
] as const

export const DISABILITY_ANSWERS_LIST = [
  {
    label: 'Sim',
    value: true,
  },
  {
    label: 'Não',
    value: false,
  },
] as const

export const FAMILY_INCOME_LIST = [
  {
    label: 'Acima de R$ 21 mil',
    value: FAMILY_INCOME_ENUM.A,
  },
  {
    label: 'Acima de R$ 10 mil',
    value: FAMILY_INCOME_ENUM.B1,
  },
  {
    label: 'Acima de R$ 5 mil',
    value: FAMILY_INCOME_ENUM.B2,
  },
  {
    label: 'Acima de R$ 3 mil',
    value: FAMILY_INCOME_ENUM.C,
  },
  {
    label: 'Acima de R$ 2 mil',
    value: FAMILY_INCOME_ENUM.D,
  },
  {
    label: 'Abaixo de R$ 1 mil',
    value: FAMILY_INCOME_ENUM.E,
  },
] as const

export const VULNERABILITIES_LIST = [
  {
    label: 'Pessoa indígena',
    value: VULNERABILITY_ENUM.INDIGENOUS_PEOPLE,
  },
  {
    label: 'Pessoa do grupo LGBTQIA+',
    value: VULNERABILITY_ENUM.LGBTQIA,
  },
  {
    label: 'Pessoa com deficiência',
    value: VULNERABILITY_ENUM.DISABILITIES_PEOPLE,
  },
  {
    label: 'Pessoa com mais de 40 anos',
    value: VULNERABILITY_ENUM.AGE_GROUP,
  },
  {
    label: 'Pessoa considerada de cor (Preto, Pardo ou Mulato)',
    value: VULNERABILITY_ENUM.ETHNIC_RACIAL,
  },
  {
    label: 'Pessoa de classe social do tipo B (Abaixo de R$ 5 mil)',
    value: VULNERABILITY_ENUM.FAMILY_INCOME_B,
  },
  {
    label: 'Pessoa de classe social do tipo C (Abaixo de R$ 3 mil)',
    value: VULNERABILITY_ENUM.FAMILY_INCOME_C,
  },
  {
    label: 'Pessoa de classe social do tipo D (Acima de R$ 2 mil)',
    value: VULNERABILITY_ENUM.FAMILY_INCOME_D,
  },
  {
    label: 'Pessoa de classe social do tipo E (Abaixo de R$ 1 mil)',
    value: VULNERABILITY_ENUM.FAMILY_INCOME_E,
  },
] as const

export const PHASE_STATUS_TYPE_LIST = [
  {
    label: 'Aplicado',
    value: PHASE_STATUS_TYPE_ENUM.APPLIED,
  },
  {
    label: 'Selecionado',
    value: PHASE_STATUS_TYPE_ENUM.SELECTED,
  },
  {
    label: 'Em andamento',
    value: PHASE_STATUS_TYPE_ENUM.PENDING,
  },
  {
    label: 'Contratado',
    value: PHASE_STATUS_TYPE_ENUM.HIRED,
  },
] as const
