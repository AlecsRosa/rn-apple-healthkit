declare module "ar_react_native_healthkit" {
    export interface HealthKitPermissions {
        permissions: {
            read: string[];
            write: string[];
        };
    }

    export interface AppleHealthKit {
        initHealthKit(permissions: HealthKitPermissions, callback: (error: string, result: Object) => void): void;
        isAvailable(callback: (error: Object, results: boolean) => void): void;

        getLatestWeight(options: HealthUnitOptions, callback: (err: string, results: HealthValue) => void): void;

        getStepCount(options: any, callback: (err: string, results: HealthValue) => void): void;

        getSleepSamples(options: any, callback: (err: string, results: Array<HealthValue>) => void): void;

        // Heart Rate
        getHeartRateSamples(options: any, callback: (err: string, results: Array<HealthValue>) => void): void;
        getHeartRateVariabilitySamples(options: any, callback: (err: string, results: Array<HealthValue>) => void): void;
        getIrregularHeartRhythmEvent(options: any, callback: (err: string, results: any) => void): void;
        getLowHeartRateEvent(options: any, callback: (err: string, results: any) => void): void;
        getHighHeartRateEvent(options: any, callback: (err: string, results: any) => void): void;
    }

    export interface HealthDateOfBirth {
        value: string;
        age: number;
    }

    export interface HealthValue {
        value: number;
        startDate: string;
        endDate: string;
    }

    export interface HealthUnitOptions {
        unit: HealthUnit;
    }
    export enum HealthUnit {
        bpm = "bpm",
        calorie = "calorie",
        celsius = "celsius",
        count = "count",
        day = "day",
        fahrenheit = "fahrenheit",
        foot = "foot",
        gram = "gram",
        hour = "hour",
        inch = "inch",
        joule = "joule",
        meter = "meter",
        mgPerdL = "mgPerdL",
        mile = "mile",
        minute = "minute",
        mmhg = "mmhg",
        mmolPerL = "mmolPerL",
        percent = "percent",
        pound = "pound",
        second = "second"
    }

    const appleHealthKit: AppleHealthKit;
    export default appleHealthKit;
}
