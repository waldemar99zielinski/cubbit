export interface dictionary {
  switch: string;
  title: string;
  body: string;
  select: string;
  footer: string;
}
export const enrypted: dictionary = {
  switch: "b-&+(2'",
  title: "`4!!(3=s 4+3",
  body: '^#5 -"$#=.-+(-$=%(+$=$-"18/3(.-= -#=#$"18/3(.-K=p$"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 "8>',
  select: "`'..2$=%(+$>",
  footer:
    "q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1",
};
export const decrypted: dictionary = {
  switch: "English",
  title: "Cubbit vault",
  body: "Advanced online file encryption and decryption, secure any file type and maintain your privacy",
  select: "Choose file",
  footer:
    "The whole is never the sum of the parts it is greater or lesser depending on how well the individuals work together",
};
export enum avaliableLanguages {
  DECRYPTED = "DECRYPTED",
  ENCRYPTED = "ENCRYPTED",
}
